# VRProject

VRProject brings VREstimator together with VRScheduler, VRPlanner, VRDCPlanner (data center construction), VRE&IPlanner (electrical and instrumentation), VRPowerPlanner (power plant construction for data center campuses), VRPowerOutage (power plant outages), VRTAR and VRCMMS on one site. VREstimator (estimator/) prices the work from drawings and takeoff; its Schedule tab turns the estimate into areas, discipline packages and resource-loaded activities and sends them to the Schedule Editor, or exports a P6 XER.

Open it at https://dwaynepennington.github.io/VRProject-app/ (VREstimator: https://dwaynepennington.github.io/VRProject-app/estimator/index.html). For standalone Windows and Mac computers there is an offline setup package (per-user, no admin rights).

Several windows: each tool opens in its own window, and in VREstimator Ctrl-click (Cmd-click) a tab or use New window to put it on another screen; windows on the same estimate stay in step.

## VRScheduler

A CPM schedule editor and schedule analysis tool that runs in the browser, from VissRad, a Suite of Interactive Smart Tools for Project Delivery.

Open it at https://dwaynepennington.github.io/VRScheduler/

## What it does

- Build a schedule: activities, milestones, WBS, calendars, constraints, predecessors and successors. The critical path is recalculated as you type.
- Load a Primavera P6 schedule (.xer or P6 XML) or a Microsoft Project XML file, with optional resource files, or start a schedule from an Excel or CSV activity list. Files can be dropped anywhere on the page.
- Analyse it: cover sheet, S-curve and FTE curve, earned value, critical path, float distribution, milestones, look-ahead plan, WBS summary, CPM check, DCMA 14-point checks (plus a redundant-logic check), baselines, Monte Carlo risk and resource levelling.
- One-click report: "Report" in the top bar produces the Schedule Summary and Critical Path report as PowerPoint or PDF. It covers the overall schedule by CWA (or WBS area) and discipline with a narrative, the critical path Gantt with a narrative, critical-path duration by discipline, and stacked resource histograms on the current (levelled) dates and on the late dates, separately and together on one slide, weekly and monthly. A Dates switch (Early | Late) builds either report on the early (current, levelled) or the late dates. It can compare with the previous issue of the report. A second report, Schedule Progress and Critical Path, shows the same pages against the baseline (grey bars and finish variance), plus a progress performance curve (planned, earned, forecast) with SPI, BEI and finish-variance boxes and a performance narrative.
- Compare two versions of a schedule: added and deleted activities and relationships, changed durations, calendars, constraints and actual dates, date movement, and a half-step delay analysis that splits the finish movement into the part caused by progress and the part caused by revisions.
- Try what-if scenarios: save copies of the plan, change them, and compare each with the plan of record.
- Work the grid: sort by any column, choose columns, roll up by WBS, zoom from 50 to 200 %, and keep the timescale in view while scrolling.
- Export to P6 XER, Microsoft Project XML or CSV.
- Step progress by rules of credit: Steps… measures an activity by weighted steps (structural steel: expedite and stage, erect, bolt up, torque, inspect, turnover) or by quantity installed, and its % complete is the weighted sum that feeds earned value and the S-curve. Twenty-three editable default rules cover civil, steel, piping, mechanical equipment, tanks, electrical, instrumentation, insulation, painting and turnaround work; steps export to P6 as activity steps.

## The tools that come with VRScheduler

Eight tools come with VRScheduler. The bar under the top bar switches between the nine.

- **VREstimator** — industrial takeoff and EPC estimating on the VissRadEST engine. On-screen takeoff on PDF drawings (area, linear and count, per-sheet scale, symbol auto-count), automated takeoff from DXF CAD files, assemblies that price many items from one measurement, crew mixes, a cost breakdown by area and discipline, what-if cases and a proposal with AACE class and QA gate. Its Schedule tab turns the estimate into areas, discipline packages and resource-loaded activities; Send to Schedule Editor adds them to the schedule open in VRScheduler, under the WBS node you pick, or opens them as a new schedule, and Export P6 XER writes a file for Primavera P6. New window (or Ctrl-click a tab) puts a tab on another screen, and windows on the same estimate stay in step. It opens on a choice of a blank estimate or the synthetic demo estimate. Open it at https://dwaynepennington.github.io/VRScheduler/estimator/index.html
- **VRPlanner** — capital work planning. Step out each work item from a module and get its work steps, crew sizes, craft hours, equipment and materials; set the logic between work items on the project's working calendar; see the manpower and equipment loading. Send to Schedule Editor adds the plan to the schedule open in VRScheduler, under the WBS node you pick, or opens it as a new schedule. The Progress tab takes percent complete on each work step, weighted by planned hours or by a rule of credit (a pump: expedite and stage, bush and shim, lift and set, pre-align, final align, turnover), and the Schedule Editor opens the plan already progressed. The Power, Outage, DC and E&I planners have the same tab. Load files: P6 XER, MPX, Excel and CSV. Open it at https://dwaynepennington.github.io/VRScheduler/planner/index.html
- **VRDCPlanner** — data center construction planning: site and shell, the power chain, cooling and liquid cooling, white space, fire and security, controls, and commissioning L1 to L5 with the integrated systems test. Send to Schedule Editor adds the plan to the schedule open in VRScheduler, or opens it as a new schedule. Open it at https://dwaynepennington.github.io/VRScheduler/dcplan/index.html
- **VRE&IPlanner** — electrical and instrumentation planning: grounding, raceway, cable, terminations, instruments and tubing, control systems, NETA testing, calibration, point-to-point and loop checks, energization and mechanical completion. Send to Schedule Editor adds the plan to the schedule open in VRScheduler, or opens it as a new schedule. Open it at https://dwaynepennington.github.io/VRScheduler/eiplan/index.html
- **VRPowerPlanner** — construction planning for the on-site power plants that serve data center campuses: reciprocating gas engines, aeroderivative and frame gas turbines, a later combined cycle (HRSG, steam turbine, air-cooled condenser), solid-oxide fuel cells, battery storage, solar, the fuel gas yard, step-up transformers, switchyard and MV feeders to the data halls, through first fire, emissions, load-step and islanding tests. Send to Schedule Editor adds the plan to the schedule open in VRScheduler, or opens it as a new schedule. Open it at https://dwaynepennington.github.io/VRScheduler/pwrplan/index.html
- **VRPowerOutage** — planned outages on those plants: gas turbine combustion, hot gas path and major inspections, aeroderivative engine swaps, reciprocating engine overhauls, generators, HRSG and steam turbine, catalyst, fuel cell stacks, BESS augmentation, transformers, switchyard and protection, and return to service, on a 7-day outage calendar. Send to Schedule Editor adds the plan to the schedule open in VRScheduler, or opens it as a new schedule. Open it at https://dwaynepennington.github.io/VRScheduler/pwrout/index.html
- **VRTAR** — turnaround estimating. Answer a short wizard for each scope item and get the tasks, crew hours, equipment, logic and material; the worklist rolls into an event fragnet, a manpower histogram and a material take-off, with Excel, P6 XER, MPX and SAP PM exports. The Load tab sends the event to the Schedule Editor, one activity per scope item. Open it at https://dwaynepennington.github.io/VRScheduler/tar/index.html
- **VRCMMS** — maintenance management. Asset register with QR labels, work requests and work orders, preventive maintenance by time or meter, job plans, spares and reliability. Planning & backlog sends the open work orders to the Schedule Editor, or into a VRTAR turnaround event; a VRTAR scope item opens its asset or work order in VRCMMS. Start your own site on the Dashboard begins with empty registers. Open it at https://dwaynepennington.github.io/VRScheduler/cmms/index.html

The planners share one engine and one module format; each has its own module library. All eight tools keep their records in this browser. File > Save file downloads a copy, File > Open file puts one back, and File > Start over reopens the synthetic sample. Planner unit rates are demonstration norms: calibrate them to your own history before a plan is issued.

## Your data

Files are read in this browser only; nothing is uploaded. A loaded schedule and the editor's plan are kept in this browser's storage so they reopen after a reload. "Start over" removes them and reopens the synthetic sample.

The sample projects in VRScheduler and all eight tools, and the man-hour library values in VREstimator, are synthetic. They do not describe any real project, client or contractor.

## About this repository

This repository holds the built site only. It is published with GitHub Pages from the `main` branch.

For the full suite, see https://vissrad.com

Copyright Pennington Group Associates. All rights reserved.
