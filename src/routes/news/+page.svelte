<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    /**
     * @type {string[] | any[]}
     */
    let newsImages = [];

    onMount(async () => {
        const res = await fetch("/data/news.json");
        newsImages = await res.json();
    })

    let lightboxImageSource = '';
    let lightboxVisibility = ''

    const showLightbox = (/** @type {string} */ srcPath) => {
        const navelem = document.getElementById('topLevelNav');
        lightboxImageSource = srcPath;
        lightboxVisibility = 'active';
        document.body.style.overflow = 'hidden';
        if (navelem) {
            navelem.style.zIndex = '999';
        }
    }

    const hideLightbox = () => {
        lightboxImageSource = '';
        lightboxVisibility = '';
        document.body.style.overflow = '';
    }
</script>

<section in:fade={inTransitionParams} out:fade={outTransitionParams}>
    <div class="lightbox {lightboxVisibility}" on:click={() => hideLightbox()} >
        <img src={lightboxImageSource}/>
    </div>
    <div class="container-fluid">
        {#each newsImages as newsPath}
        <img class="w-50 img-fluid mx-auto d-block" src={newsPath} on:click={() => showLightbox(newsPath)} />
    {/each}
    </div>
</section>

<style>

.lightbox {
    display: none;
}

.lightbox.active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 1000;
    overflow: hidden;
    display: flex;
}

.lightbox.active img {
    object-fit: scale-down;
    width: 100%;
    height: 100%;
}

</style>