import {event} from "d3-selection";

export function nopropagation() {
  event.stopImmediatePropagation();
}

export function allowevent() {
  event.preventDefault();
}

export default function() {
  event.preventDefault();
  event.stopImmediatePropagation();
}
