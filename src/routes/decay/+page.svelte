<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fade } from "svelte/transition";
    import Heading from "../../components/heading.svelte";

    /**
     * @type {string[] | any[]}
     */
    let imagePaths = [];
    for (let i = 1; i < 5; i++)
    {
        imagePaths.push(`images/decay/${i}.jpeg`);
    }

</script>

<section in:fade={inTransitionParams} out:fade={outTransitionParams}>
    <div class="container-fluid">
        {#each imagePaths as imgPath}
            <img class="img-fluid d-block mt-1" src={imgPath}/>
        {/each}
    </div>
    <div class="mt-2">
        <Heading>Decay (2025)</Heading>
        <p>DECAY presents a life-sized horse based on the simplified structure of a children's 3D
puzzle—an object associated with play, imagination, and early ideas of freedom.
Constructed from cardboard and coated with plaster, the sculpture deliberately embraces
fragile materials, resisting the permanence traditionally associated with monuments. Its
vulnerability becomes an integral part of the work.</p>
        <p>
            The horse is covered with hundreds of cast plaster human teeth. As the hardest material in
the human body, teeth become both armor and evidence of vulnerability. Growing across the
animal's surface like a protective shell, they simultaneously point to their own
impermanence: without care, teeth decay. The work plays with this contradiction—a
seemingly resilient armor made from materials that are themselves brittle and prone to
breaking.
        </p>
        <p>
            Against a backdrop of war, rising homophobia, anti-queer violence, and femicide, DECAY
reflects on the gradual erosion of empathy and collective responsibility. Just as teeth require
constant care to remain intact, compassion and solidarity demand continuous attention. The
sculpture asks what remains of freedom when the structures meant to protect us become
fragile themselves.
        </p>
        <p>
            The sculpture was developed during a residency at GlogauAIR Berlin.
        </p>
    </div>
</section>
