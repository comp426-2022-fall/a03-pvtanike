#!/usr/bin/env node

import {roll} from "../lib/roll.js";
import minimist from 'minimist';

//initialize args of command line reader
const args = minimist(process.argv.slice(2));

console.log(roll(args.sides,args.dice,args.rolls))

// console.log(args.sides);
// console.log(args.dice);
// console.log(args.rolls);