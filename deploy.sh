#!/bin/bash

rsync -r --delete-after --quiet ./{ecosystem.config.js,node_modules,dist,package.json} ubuntu@ec2-184-73-126-109.compute-1.amazonaws.com:projs/planejar-form-poc/