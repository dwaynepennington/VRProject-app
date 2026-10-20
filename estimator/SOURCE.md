# VREstimator (source copy for the VRScheduler build)

This folder is VREstimator, built on the VissRadEST engine with a PlanSwift-style
Takeoff Board, CAD (DXF) takeoff, crews and an InEight-style cost breakdown.
`tools/build_vrscheduler.py` copies it into the VRScheduler site as `estimator/`,
where its Schedule tab sends the estimate's schedule to the Schedule Editor
(handoff `from: 'est'`) or exports a P6 XER.

Development happens in the VREstimator repository (Perplexity Project
"VREstimator Development"); copy the folder here, without .git, to update.
