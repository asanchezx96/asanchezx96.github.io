import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface iStoreGlobal {
    user: object;
    deleteDataUser: () => void;
    updateDataStore: (params: ParamsUpdateDataStore) => void;

    expanded: boolean;
    setExpanded: (params: boolean) => void;

    setProgramsActs: (params: ParamsUpdateDataStore) => void;
    saveChangesPrograms: any; // eslint-disable-line

    editRows: boolean;
    setEditRows: (params: boolean) => void;

    globalHeight: number;
    setGlobalHeight: (params: number) => void;

    Header: string;
    setHeader: (params: string) => void;

    DbMicrosip: string | null;
    setDbMicrosip: (dbMicrosip: string) => void;
}

type ParamsUpdateDataStore = Omit<iStoreGlobal, "updateDataStore" | "deleteDataUser" | "setExpanded" | "setProgramsActs" | "setEditRows" | "setGlobalHeight">;

export const useStoreGlobal = create(
    persist<iStoreGlobal>(
        (set) => ({
            user: {},
            saveChangesPrograms: {},
            setProgramsActs: (params: ParamsUpdateDataStore) => {
                set({
                    saveChangesPrograms: params,
                });
            },

            updateDataStore: (params: ParamsUpdateDataStore) => {
                set({
                    user: params.user || {},
                });
            },
            deleteDataUser: () => {
                set({
                    user: {},
                });
            },

            editRows: false,
            setEditRows: (params: boolean) => {
                set({
                    editRows: params,
                });
            },

            expanded: false,
            setExpanded: (params: boolean) => {
                set({
                    expanded: params,
                });
            },

            globalHeight: 0,
            setGlobalHeight: (params: number) => {
                set({
                    globalHeight: params,
                });
            },

            Header: "Plantilla",
            setHeader: (value: string) => {
                set({
                    Header: value,
                })
            },


            DbMicrosip: null,
            setDbMicrosip: (value: string) => {
                set({
                    DbMicrosip: value,
                });
            },
        }),
        {
            name: "global-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);