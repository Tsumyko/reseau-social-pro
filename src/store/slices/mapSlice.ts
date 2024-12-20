import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MapState {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  selectedFilters: {
    type: string | null;
    category: string | null;
  };
}

const initialState: MapState = {
  center: {
    lat: 46.227638,
    lng: 2.213749,
  },
  zoom: 6,
  selectedFilters: {
    type: null,
    category: null,
  },
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCenter: (state, action: PayloadAction<{ lat: number; lng: number }>) => {
      state.center = action.payload;
    },
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    setFilters: (state, action: PayloadAction<{ type?: string | null; category?: string | null }>) => {
      state.selectedFilters = {
        ...state.selectedFilters,
        ...action.payload,
      };
    },
  },
});

export const { setCenter, setZoom, setFilters } = mapSlice.actions;
export default mapSlice.reducer;