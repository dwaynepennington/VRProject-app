# VREstimator (VissRad)

Industrial takeoff and estimating built on the VissRadEST engine (same data format).

- **Takeoff Board** (board.js) - persistent on-screen PDF takeoff: area, linear and count items, per-sheet scale, symbol auto-count, assemblies that write VissRadEST takeoff lines.
- **Assemblies** - one measurement drives many man-hour library items through formulas (Q, P, D, H, N).
- **Cost Breakdown / Resources / What-if** (cbs.js) - CBS by area and discipline with labor, material, equipment and subcontract; craft resource view and rates; scenarios and snapshots.
- **Import / Export** (xio.js) - VissRadEST import workbook, Estimate takeoff workbook, generic takeoff CSV/XLSX.
- Everything from VissRadEST: Methods (Parametric / Known Qty / Detailed), Bid Desk, drawing scan, Library, Indirects, Engineering guard, Benchmark, Proposal, Audit.

Static site: open index.html (or serve the folder). Demo data is synthetic.
