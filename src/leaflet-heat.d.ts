// src/types/leaflet-heat.d.ts

import * as L from 'leaflet';

// Extend the L object to include heatLayer
declare module 'leaflet' {
  namespace heat {
    export function heatLayer(
      latLngs: L.LatLngTuple[],
      options?: L.HeatLayerOptions
    ): L.Layer;
  }

  // Add the heatLayer to the L namespace
  export function heatLayer(
    latLngs: L.LatLngTuple[],
    options?: L.HeatLayerOptions
  ): L.Layer;
}
