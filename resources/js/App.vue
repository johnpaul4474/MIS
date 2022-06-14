
        <template>
            <v-app style="background: #e8f0f7">
                <v-app-bar app>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>

                    <v-toolbar-title>Title</v-toolbar-title>
                </v-app-bar>

                <v-navigation-drawer app>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                Application
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                subtext
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider></v-divider>
                </v-navigation-drawer>

                <v-main app>
                    <router-view></router-view>
                </v-main>
            </v-app>
        </template>


<script>
    export default {
        name: "App"
    };
</script>