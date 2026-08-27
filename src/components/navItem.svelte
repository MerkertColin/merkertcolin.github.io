<script>
    /**@type {string}*/
    export let href;
    /**@type {string}*/
    export let target = '';
</script>

<a class="nav-link text-muted" {href} {target}><slot/></a>

<style>
    .nav-link {
        padding: 0;
        margin: 4px 0;
        text-decoration: none;
    }
</style>