/* ==========================================================================
   VissRad standalone builds (VRScheduler, VRPlanner, VRTAR) — loaded after
   shared/shell.js by the standalone pages only, not by the suite.
   suiteToolBar: the bar that switches between the tools of the build.
   suiteFileMenu: the File menu of a tool that keeps its records in one
   storage key (Save file, Open file, Start over).
   ========================================================================== */

/* Standalone builds: the bar that switches between the tools of the build. */
function suiteToolBar(tools) {
  return el('nav', { class: 'modrail', 'aria-label': 'Tools' },
    tools.map((t) => el('a', { class: `modrail-item${t.active ? ' active' : ''}`, href: t.href, title: t.title || t.label,
      'aria-current': t.active ? 'page' : null }, el('span', { class: 'dot' }), t.label)));
}

/* Standalone builds: File menu for a module whose records sit in one storage
   key (file = { store, key, name, label }) or in several (keys: [...], e.g.
   one per register; the file then holds { key: value } for each). Save file downloads them as JSON,
   Open file puts a saved one back, Start over removes them so the module
   reopens on its synthetic sample. */
function suiteFileMenu(file) {
  const name = file.name || 'VissRad';
  const multi = Array.isArray(file.keys) && file.keys.length;
  const keyId = multi ? file.keys[0] : file.key;
  const readKey = (k) => { try { return JSON.parse(file.store.get(k) || 'null'); } catch (e) { return null; } };
  const save = () => {
    let data = null;
    if (multi) { data = {}; file.keys.forEach((k) => { const v = readKey(k); if (v !== null) data[k] = v; }); } else data = readKey(file.key);
    const doc = { format: 'vissrad-standalone-file', v: 1, tool: name, key: keyId, multi: !!multi, saved: new Date().toISOString(), data: data || {} };
    const stamp = new Date().toISOString().slice(0, 10);
    const blob = new Blob([JSON.stringify(doc)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = `${(file.label || name).replace(/[^A-Za-z0-9._-]+/g, '-')}-${stamp}.json`;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    if (typeof toast === 'function') toast(`Saved: ${a.download}`);
  };
  const open = () => {
    const inp = el('input', { type: 'file', accept: '.json,application/json', style: 'display:none' });
    inp.addEventListener('change', async () => {
      const f = inp.files && inp.files[0]; inp.remove(); if (!f) return;
      let doc = null;
      try { doc = JSON.parse(await f.text()); } catch (e) { doc = null; }
      if (!doc || doc.format !== 'vissrad-standalone-file' || doc.key !== keyId || !!doc.multi !== !!multi || typeof doc.data !== 'object') {
        if (typeof toast === 'function') toast(`${f.name} is not a ${name} file.`, true);
        return;
      }
      modal({
        title: `Open ${f.name}?`, sub: `${name} file saved ${String(doc.saved || '').slice(0, 16).replace('T', ' ')}`, width: 520,
        body: el('div', { class: 'banner warn' }, `What ${name} holds in this browser now is replaced by the file. Save a file first to keep it.`),
        buttons: [{ label: 'Cancel', onClick: closeModal }, { label: 'Open file', primary: true, onClick: () => {
          try {
            if (multi) file.keys.forEach((k) => { if (doc.data[k] !== undefined) file.store.set(k, JSON.stringify(doc.data[k])); else file.store.del(k); });
            else file.store.set(file.key, JSON.stringify(doc.data));
          } catch (e) { if (typeof toast === 'function') toast('Browser storage is full; the file was not opened.', true); return; }
          location.reload();
        } }],
      });
    });
    document.body.appendChild(inp); inp.click();
  };
  const startOver = () => modal({
    title: 'Start over', sub: 'This cannot be undone', width: 520,
    body: el('div', { class: 'banner warn' }, `Everything ${name} holds in this browser is removed and it reopens on the synthetic sample. Save a file first to keep a copy.`),
    buttons: [{ label: 'Keep it', onClick: closeModal }, { label: 'Remove and reload', primary: true, onClick: () => { (multi ? file.keys : [file.key]).forEach((k) => file.store.del(k)); location.reload(); } }],
  });
  const acts = { save, open, over: startOver };
  const sel = el('select', { class: 'ghost', id: 'btn-file', 'aria-label': 'File', title: 'Save a file, open a saved file, or start over',
    onchange: () => { const f = acts[sel.value]; sel.value = ''; if (f) f(); } },
  el('option', { value: '' }, 'File\u2026'),
  el('option', { value: 'save' }, 'Save file'),
  el('option', { value: 'open' }, 'Open file\u2026'),
  el('option', { value: 'over' }, 'Start over\u2026'));
  return sel;
}

