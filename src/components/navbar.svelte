<script>
    import Carousel from "./carousel.svelte";
import NavItem from "./navItem.svelte"
</script>
<nav
    class="nav flex-column"
    id="topLevelNav"
>
    <NavItem href="/">MARTIN WINKLER</NavItem>
    <NavItem href="/news">News</NavItem>
    <NavItem href="/about">About</NavItem>
    <hr/>
    <NavItem href="/leaf_by_leaf">Leaf by Leaf</NavItem>
    <NavItem href="/decay">Decay</NavItem>
    <NavItem href="/tears_for_queers">Tears for Queers</NavItem>
    <NavItem href="/paintings">Paintings</NavItem>
</nav>

<style>
    nav {
        padding: 1rem;
    }
</style>
