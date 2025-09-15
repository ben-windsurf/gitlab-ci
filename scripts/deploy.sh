#!/usr/bin/env bash
set -euo pipefail

echo "Starting demo deploy..."
echo "Deployed at $(date -Iseconds)" | tee -a deploy.log

# fake public URL for visibility in logs/artifacts
FAKE_URL="https://example.com/demo/$(date +%s)"
echo "Demo deployed to: $FAKE_URL" | tee -a deploy.log
