<script>
    import NavItem from "./navItem.svelte"
</script>
<nav
    class="navbar navbar-expand-sm bg-body-tertiary sticky-top"
    id="topLevelNav"
>
    <div class="container-fluid">
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
                <NavItem href="/">MARTIN WINKLER</NavItem>
                <NavItem href="/about">INFO</NavItem>
                <NavItem href="/contact">CONTACT</NavItem>
            </div>
        </div>
    </div>
</nav>

<style>
</style>
