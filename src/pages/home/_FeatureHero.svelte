<script>
  import { Section, HeroHeader } from "flowbite-svelte-blocks";
  import { Button, DeviceMockup } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import ParallaxDevices from "./_ParallaxDevices.svelte";
</script>

<Section name="heroVisual">
  <div class="mx-auto place-self-center lg:col-span-7">
    <div class="-mt-8 mb-4 block w-full lg:hidden">
      <DeviceMockup device="desktop">
        <div class="bg-pink flex h-full w-full items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ikAnAXf3gJo?autoplay=1&loop=1&mute=1&playlist=ikAnAXf3gJo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            class="w-[720px]"
            allowfullscreen
          ></iframe>
        </div>
      </DeviceMockup>
    </div>  
    <HeroHeader
      h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight !leading-[1.05] md:text-5xl xl:text-6xl dark:text-white"
      pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200"
    >
      <svelte:fragment slot="h1">
        Me In a 
          <mark
            class="my-1 rounded bg-primary-50 px-2 py-0 text-white dark:bg-primary-700"
            >Nutshell</mark
          >
        🌰
      </svelte:fragment>
      <svelte:fragment slot="paragraph">
              <div class="block sm:hidden">

          <span class="font-bold text-primary-200">Wei Li</span>
          I am currently working at Microsft as a Sr Principal Applied Scientist. I was staff research scientist and manager at NewsBreak (series C startup). I was a senior research scientist at Facebook Seattle working on Video Ads and Marketplace Product Intelligence. Before Facebook, I was a senior software engineer at Google Research in Zurich, Switzerland. My research at Google focused on video analysis and its applications in making YouTube free and enjoyable. I also work with academia through university relationship. I worked closely with ETH CVL led by Professor Luc Van Gool on co-organizing Webvision challenge and workshop.

<br />
I got my MPhil from The Chinese University of Hong Kong supervised by Professor Xiaogang Wang. I was also a member of MMlab and worked closely with Professor Xiaoou Tang. Before CUHK, I got my bachelor from Tsinghua University, where I was a member of the Yao Class. I did my bachelor thesis with Professor Changshui Zhang.

<br />
After my daytime research, I am a contributor to scikit-learn. A Kaggle Master. Reviewer for computer vision journals and conferences. A history lover, an ameteur photographer and a traveler (30+ countries and counting).          
</div>
      </svelte:fragment>
    </HeroHeader>

    <div
      class="md:text-md lg:text-md mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-200 lg:mb-8"
    >
    </div>
  </div>
</Section>
