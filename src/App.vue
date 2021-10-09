<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
export default {
    name: "App",
    metaInfo() {
        return {
            title: "Divavictoria Atelier",
            meta: [
                { name: "description", content: "Divavictoria Atelier" },
                { property: "og:title", content: "Divavictoria Atelier" },
                { property: "og:site_name", content: "Divavictoria Atelier" },
                { property: "og:type", content: "website" },
                { name: "robots", content: "index,follow" },
            ],
        };
    },
    data: () => ({
        //
    }),
};
</script>
