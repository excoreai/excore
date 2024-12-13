/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as agent_conversation from "../agent/conversation.js";
import type * as agent_embeddingsCache from "../agent/embeddingsCache.js";
import type * as agent_memory from "../agent/memory.js";
import type * as excore_agent from "../excore/agent.js";
import type * as excore_agentDescription from "../excore/agentDescription.js";
import type * as excore_agentInputs from "../excore/agentInputs.js";
import type * as excore_agentOperations from "../excore/agentOperations.js";
import type * as excore_conversation from "../excore/conversation.js";
import type * as excore_conversationMembership from "../excore/conversationMembership.js";
import type * as excore_game from "../excore/game.js";
import type * as excore_ids from "../excore/ids.js";
import type * as excore_inputHandler from "../excore/inputHandler.js";
import type * as excore_inputs from "../excore/inputs.js";
import type * as excore_insertInput from "../excore/insertInput.js";
import type * as excore_location from "../excore/location.js";
import type * as excore_main from "../excore/main.js";
import type * as excore_movement from "../excore/movement.js";
import type * as excore_player from "../excore/player.js";
import type * as excore_playerDescription from "../excore/playerDescription.js";
import type * as excore_world from "../excore/world.js";
import type * as excore_worldMap from "../excore/worldMap.js";
import type * as constants from "../constants.js";
import type * as crons from "../crons.js";
import type * as engine_abstractGame from "../engine/abstractGame.js";
import type * as engine_historicalObject from "../engine/historicalObject.js";
import type * as http from "../http.js";
import type * as init from "../init.js";
import type * as logs from "../logs.js";
import type * as messages from "../messages.js";
import type * as music from "../music.js";
import type * as testing from "../testing.js";
import type * as util_assertNever from "../util/assertNever.js";
import type * as util_asyncMap from "../util/asyncMap.js";
import type * as util_compression from "../util/compression.js";
import type * as util_FastIntegerCompression from "../util/FastIntegerCompression.js";
import type * as util_geometry from "../util/geometry.js";
import type * as util_isSimpleObject from "../util/isSimpleObject.js";
import type * as util_llm from "../util/llm.js";
import type * as util_minheap from "../util/minheap.js";
import type * as util_object from "../util/object.js";
import type * as util_sleep from "../util/sleep.js";
import type * as util_types from "../util/types.js";
import type * as util_xxhash from "../util/xxhash.js";
import type * as world from "../world.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "agent/conversation": typeof agent_conversation;
  "agent/embeddingsCache": typeof agent_embeddingsCache;
  "agent/memory": typeof agent_memory;
  "excore/agent": typeof excore_agent;
  "excore/agentDescription": typeof excore_agentDescription;
  "excore/agentInputs": typeof excore_agentInputs;
  "excore/agentOperations": typeof excore_agentOperations;
  "excore/conversation": typeof excore_conversation;
  "excore/conversationMembership": typeof excore_conversationMembership;
  "excore/game": typeof excore_game;
  "excore/ids": typeof excore_ids;
  "excore/inputHandler": typeof excore_inputHandler;
  "excore/inputs": typeof excore_inputs;
  "excore/insertInput": typeof excore_insertInput;
  "excore/location": typeof excore_location;
  "excore/main": typeof excore_main;
  "excore/movement": typeof excore_movement;
  "excore/player": typeof excore_player;
  "excore/playerDescription": typeof excore_playerDescription;
  "excore/world": typeof excore_world;
  "excore/worldMap": typeof excore_worldMap;
  constants: typeof constants;
  crons: typeof crons;
  "engine/abstractGame": typeof engine_abstractGame;
  "engine/historicalObject": typeof engine_historicalObject;
  http: typeof http;
  init: typeof init;
  logs: typeof logs;
  messages: typeof messages;
  music: typeof music;
  testing: typeof testing;
  "util/assertNever": typeof util_assertNever;
  "util/asyncMap": typeof util_asyncMap;
  "util/compression": typeof util_compression;
  "util/FastIntegerCompression": typeof util_FastIntegerCompression;
  "util/geometry": typeof util_geometry;
  "util/isSimpleObject": typeof util_isSimpleObject;
  "util/llm": typeof util_llm;
  "util/minheap": typeof util_minheap;
  "util/object": typeof util_object;
  "util/sleep": typeof util_sleep;
  "util/types": typeof util_types;
  "util/xxhash": typeof util_xxhash;
  world: typeof world;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
