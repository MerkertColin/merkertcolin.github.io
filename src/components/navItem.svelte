<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let href;
    export let target = '';
    let Offcanvas;
    onMount(async () => {
        const bootstrap = await import('bootstrap');
        Offcanvas = bootstrap.Offcanvas;
    });

    function closeOffcanvas() {
        const element = document.getElementById('offcanvasExample');
        const instance = Offcanvas?.getInstance(element);
        if (instance) {
            element.addEventListener(
            'hidden.bs.offcanvas',
            () => {
                document
                    .querySelectorAll('.offcanvas-backdrop')
                    .forEach((backdrop) => backdrop.remove());

                document.body.classList.remove('modal-open');
                document.body.style.removeProperty('overflow');
                document.body.style.removeProperty('padding-right');
            },
            { once: true });
        }
        instance?.hide();
    }
</script>



<a on:click={closeOffcanvas} class="nav-link text-muted" {href} {target}><slot/></a>

<style>
    .nav-link {
        padding: 0;
        margin: 4px 0;
        text-decoration: none;
        cursor: pointer;
    }
</style>