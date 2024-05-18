#!/bin/bash
tmux kill-session -t weeklywardrobesite
tmux new-session -d -s weeklywardrobesite
tmux send-keys -t weeklywardrobesite "./run_site.sh" C-m