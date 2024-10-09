<script>
  import { Section, HeroHeader } from "flowbite-svelte-blocks";
  import { Button, DeviceMockup } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import ParallaxDevices from "./_ParallaxDevices.svelte";
</script>
<!-- Reference: https://flowbite-svelte-blocks.vercel.app/marketing/hero -->
<Section name="heroVisual">
  <div class="mr-auto place-self-center lg:col-span-7">
    <HeroHeader h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      <svelte:fragment slot="h1">
        Me In a
        <mark
          class="my-1 rounded bg-primary-50 px-2 py-0 text-white dark:bg-primary-700"
          >Nutshell</mark
        >
        🌰
      </svelte:fragment>
      <svelte:fragment slot="paragraph">
        <div class="block">
          <p>
            <span class="font-bold text-primary-200">Wei Li</span>
            I am currently working at Microsft as a Sr. Principal Applied Scientist.
            I was staff research scientist and manager at NewsBreak (series C startup).
            I was a senior research scientist at Facebook Seattle & Google Research
            in Zurich, Switzerland with a focus on Computer Vision and Ads ranking.
          </p>
          &nbsp;
          <p>
            I got my MPhil from The Chinese University of Hong Kong supervised
            by Professor Xiaogang Wang. I was also a member of MMlab and
            worked closely with Professor Xiaoou Tang. Before CUHK, I got my
            bachelor from Tsinghua University, where I was a member of the Yao
            Class. I did my bachelor thesis with Professor Changshui Zhang. I
            also work with academia through university relationship. I worked
            closely with ETH CVL led by Professor Luc Van Gool on
            co-organizing Webvision challenge and workshop.
          </p>
          &nbsp;
          <p>
            After my daytime research, I am a contributor to scikit-learn. A
            Kaggle Master. Reviewer for computer vision journals and
            conferences. A book lover, a DIYer and a traveler (30+ countries
            and counting).
          </p>
        </div>
      </svelte:fragment>
  </HeroHeader>
  </div>
  <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
    <img src="https://images.lemonly.com/wp-content/uploads/2017/06/27053708/Marriott_Seattle_Space_Needle_Final.gif" alt="mockup" object-fit="cover" layout="fill"/>
  </div>
</Section>

