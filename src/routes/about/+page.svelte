<script>
    import { outTransitionParams, inTransitionParams } from '$lib/transitioning';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'
    import Heading from '../../components/heading.svelte';
    import SubHeading from '../../components/subHeading.svelte';

    /**
     * @typedef {object} AboutInfo
     * @property {string} timeframe
     * @property {string} info
    */

    /** 
    * @typedef {object} About
    * @property {AboutInfo[]} about.education
    * @property {AboutInfo[]} about.residencies
    * @property {AboutInfo[]} about.publications
    * @property {Object} about.exhibitions
    * @property {AboutInfo[]} about.exhibitions.solo
    * @property {AboutInfo[]} about.exhibitions.group
    */

    /**
     * @type {About}
     */
    let about;

    onMount(async () => {
        const res = await fetch('/data/about.json');
        about = await res.json();
    })

</script>

<section class="container pb-4 text-muted" in:fade={inTransitionParams} out:fade={outTransitionParams}>
    <p>
        <span>MartinWinklerStudio (at) gmail.com</span>
        <br />
        <span>lives and works in Göttingen, Germany</span>
    </p>
    <p class="text-left pt-3">
        Martin Winkler (b. 1992, Halle/Saale, Germany) is a visual artist based in Germany. Through painting, installation, and
collaborative projects, he investigates queer memory, visibility, and the fragile ways histories are constructed. Borrowing
visual languages from children's media, folklore, and popular culture, he juxtaposes playful imagery with themes of
violence, vulnerability, and care.
    </p>
    <p>
        Rather than illustrating history, Winkler reconstructs its emotional afterlife. His works transform archival fragments and
familiar symbols into poetic, often unsettling narratives that question whose lives are remembered, whose disappear,
and how empathy can become a political act.
    </p>
    <a class="text-muted" href="https://www.instagram.com/mart.winkler/">instagram</a>
    <hr />
    <div class="container">
        <Heading>Education</Heading>
        <div class="spacing">
            {#if about}
                {#if about.exhibitions.solo.length > 0}
                    <SubHeading>Solo Exhibitions</SubHeading>
                    {#each about.exhibitions.solo as soloExhibition}
                        <p>{soloExhibition.timeframe} {soloExhibition.info}</p>
                    {/each}
                {/if}
            {#if about.exhibitions.group.length > 0}
                <SubHeading>Group Exhibitions</SubHeading>
                {#each about.exhibitions.group as groupExhibition}
                    <p>{groupExhibition.timeframe} {groupExhibition.info}</p>
                {/each}
            {/if}
            {#if about.education}
                <SubHeading>Education</SubHeading>
                {#each about.education as education}
                    <p>{education.timeframe} {education.info}</p>
                {/each}
            {/if}
            {#if about.residencies}
                <SubHeading>Residencies / Grants</SubHeading>
                {#each about.residencies as residency}
                    <p>{residency.timeframe} {residency.info}</p>
                {/each}
            {/if}
            
            <SubHeading>Publications</SubHeading>
            {#each about.publications as publication}
                <p>{publication.timeframe} {publication.info}</p>
            {/each}

        {/if}
        </div>
    </div>
</section>

<style>
    img {
        object-fit: contain;
    }

    .spacing p {
        margin-bottom: .2rem;
    }

    .spacing > :global(h2), :global(h3) {
        margin-top: 1rem; 
        margin-bottom: 1rem;
    }

    :global(body) {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: underline
    }
</style>