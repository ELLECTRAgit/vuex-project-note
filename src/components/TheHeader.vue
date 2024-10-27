<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <!-- router-link работает как тег а, но не перезагружает страницу, а меняет router-view -->
                <!-- при этом href меняем на to -->

                <router-link class="navbar-logo" to="/">{{title}}</router-link>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link :to="link.url" class="navbar-link">{{link.title}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
import {app, links} from "@/config";
export default {
    data () {
        return {
            links: links,
            title: app.title,
        }
    }
};
</script>
