<script>
    import { page } from "$app/stores";
    import Navbar from "../components/navbar.svelte";
    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<svelte:head>
    <title>Martin Winkler</title>
</svelte:head>

<div class="container p-5">
    <div class="row d-md-flex">
        {#if $page.url.pathname !== '/'}
        <button class="navbar-toggler border-0 shadow-none d-md-none d-flex" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <Navbar/>
            </div>
        </div>
        {/if}
    </div>
    <div class="row">
        <div class="col-md-auto">
            <div class="container">
                <div class="row">
                    <div class="col-md-auto">
                        <div class="d-none d-md-flex" data-bs-dismiss="offcanvas">
                            <Navbar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <main>
            <slot></slot>
            </main>
        </div>
    </div>
</div>


