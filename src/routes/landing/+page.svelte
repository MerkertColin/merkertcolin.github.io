<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fly } from "svelte/transition";
</script>

<section class="" in:fly={inTransitionParams} out:fly={outTransitionParams}>
</section>

<style>

    section {
        width: 100vw;
        height: 93.3vh;
        background-image: url("/images/shop_banner.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
</style>