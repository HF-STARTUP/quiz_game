import { defineStore } from "pinia";

export const useAppStore = defineStore("store", {
    state: () => ({
        subjects: [
           { code: "ASR 523", title: "Administration des réseaux Windows" },
            { code: "ASR 514", title: "Management et création d'entreprise" },
            { code: "ASR 511", title: "Économie digitale" },
            { code: "ASR 512", title: "Législation et régulation du secteur des télécoms" },
            { code: "ASR 513", title: "Architecture, applications et services réseau" },
            { code: "ASR 521", title: "Administration des réseaux interconnectés et routeurs" },
            { code: "ASR 522", title: "Administration des réseaux & systèmes d'exploitation Linux" },
            { code: "ASR 524", title: "Administration des réseaux locaux et des commutateurs" },
            { code: "ASR 531", title: "Sécurité informatique et techniques de cryptographie" },
            { code: "ASR 532", title: "Sécurité des réseaux sans fils" },
        ],
    }),
});
