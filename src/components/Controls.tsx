"use client";
import { useReducer } from "react";

import {
  ACTION_TYPES,
  controlReducer,
  INITIAL_STATE,
} from "@/reducers/controlReducer";
import {
  PauseIcon,
  PlayIcon,
  TrackNextIcon,
  TrackPreviousIcon,
} from "@radix-ui/react-icons";

import { Button } from "./ui/Button";

export function Controls() {
  const [state, dispatch] = useReducer(controlReducer, INITIAL_STATE);

  function handleTogglePlayerState() {
    const newPlayerState =
      state === ACTION_TYPES.PLAYING
        ? ACTION_TYPES.PAUSED
        : ACTION_TYPES.PLAYING;

    dispatch({ type: newPlayerState });
  }

  return (
    <div className="flex gap-2 min-w-6">
      <div className="flex gap-2">
        <Button>
          <TrackPreviousIcon />
        </Button>
        <Button onClick={handleTogglePlayerState}>
          {state === ACTION_TYPES.PAUSED ? <PlayIcon /> : <PauseIcon />}
        </Button>
        <Button>
          <TrackNextIcon />
        </Button>
      </div>
    </div>
  );
}
