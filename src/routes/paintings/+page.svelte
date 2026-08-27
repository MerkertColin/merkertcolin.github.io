<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fade } from "svelte/transition";

    /**
     * @type {string[] | any[]}
     */
    let imagePaths = [];
    for (let i = 1; i < 10; i++)
    {
        imagePaths.push(`images/paintings/${i}.jpeg`);
    }

</script>

<section in:fade={inTransitionParams} out:fade={outTransitionParams}>
    <div class="container-fluid">
        {#each imagePaths as imgPath}
            <img class="img-fluid d-block mt-1" src={imgPath}/>
        {/each}
    </div>
</section>