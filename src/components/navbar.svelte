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
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="/paintings"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="false"
                        aria-expanded="false"
                    >
                        Work
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="/paintings">Paintings</a>
                        </li>
                        <li>
                            <a 
                                class="dropdown-item dropdown-toggle" 
                                data-bs-toggle="collapse" 
                                href="#installationsSubLinks" 
                                role="button" 
                                aria-expanded="false" 
                                aria-controls="installationsSubLinks"
                            >
                                Installations
                            </a>
                            <ul class="nav-item collapse" id="installationsSubLinks">
                                <li>
                                    <a class="dropdown-item" href="/installations/tears_for_queers">Tears for Queers</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="/installations/pflanze_durch_den_asphalt">Pflanze durch den Asphalt</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <NavItem href="/about">About</NavItem>
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
