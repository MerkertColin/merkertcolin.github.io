<script>
    import NavItem from "./navItem.svelte";
</script>
<nav
    class="navbar navbar-expand-sm bg-body-tertiary sticky-top"
    id="topLevelNav"
>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">MARTIN WINKLER</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExpandable"
            aria-controls="navbarExpandable"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarExpandable">
            <div class="navbar-nav ms-auto">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/work">Work</NavItem>
                <NavItem href="/about">Vitae</NavItem>
                <NavItem href="/contact">Contact</NavItem>
            </div>
        </div>
    </div>
</nav>

<style>
    #installationsSubLinks {
        list-style: none;
        padding-left: 0;
    }

    #installationsSubLinks > li {
        text-indent: 1rem;
    }
</style>
