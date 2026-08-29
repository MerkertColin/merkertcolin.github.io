<script>
    import Carousel from "./carousel.svelte";
    import { inTransitionParams, outTransitionParams } from '$lib/transitioning';
    import NavItem from "./navItem.svelte"
    import { fade } from "svelte/transition";

    let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav
    class="nav navbar flex-column d-md-flex align-items-stretch"
    id="topLevelNav"
>
  <div in:fade={inTransitionParams} out:fade={outTransitionParams} class="navbar-collapse flex-column align-items-stretch">
    <NavItem href="/">MARTIN WINKLER</NavItem>
    <NavItem href="/news">News</NavItem>
    <NavItem href="/about">About</NavItem>
    <hr/>
    <NavItem href="/leaf_by_leaf">Leaf by Leaf</NavItem>
    <NavItem href="/decay">Decay</NavItem>
    <NavItem href="/tears_for_queers">Tears for Queers</NavItem>
    <NavItem href="/paintings">Paintings</NavItem>
  </div>
</nav>

<style>
    nav {
        padding: 1rem;
    }
</style>
