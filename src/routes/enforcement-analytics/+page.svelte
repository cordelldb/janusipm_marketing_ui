

<script lang="ts">
    import { Header } from "$lib/components/ui/header"
    import * as Card from "$lib/components/ui/card";
    import Clustering from "$lib/images/data_analysis/clustering.png";
    import Vectors from "$lib/images/data_analysis/embeddings.png";
    import Kmeans from "$lib/images/data_analysis/kmeans.png";
    import { Footer } from "$lib/components/ui/footer/index";

</script>

<Header />


<div class="bg-white font-sans mt-10 pt-10 text-zinc-700">
	<div class="container font-frank  font-black leading-tight text-zinc-700 antialiased">
		<div class="mt-10 font-light text-4xl text-zinc-600">The Science of Analytics:</div>
		<div class="mb-10 text-6xl">Redefining Brand Protection</div> 
	</div>

  <div class="flex justify-center container text-xl mb-8 leading-7 text-zinc-700 tracking-wide">
    At Janus IPM, we revolutionize brand protection by harnessing the full power of advanced artificial intelligence (AI) technologies. Our state-of-the-art approach seamlessly integrates vector embeddings, sophisticated clustering algorithms, and cutting-edge large language models (LLMs) to deliver an unparalleled, comprehensive brand protection solution for the digital age.
    </div> 

<!------------------------------------------------=----------------------------------------------->

  <div class="pt-10 flex justify-center max-w-screen-4xl font-frank mb-20">
    <div class="flex col-span-2 gap-20" >
      <div class="w-[650px]">
        <div class="mb-4 text-3xl font-black text-zinc-700" id="vector">Vector Embeddings:</div>
        <Card.Root class="mb-8 font-frank border border-none antialiased">
          <Card.Header class="bg-white">
            <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Semantic Similarity</Card.Title>
              <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide"    >
                By representing data as  vector embeddings, we can uncover hidden infringements by understanding context, not just keywords. It allows for detection of subtle variations and misspellings that traditional searches miss, and it's extremely useful in identifying conceptually similar content, even when wording differs.
              </Card.Description>
          </Card.Header>                                                                          
        </Card.Root>
        <Card.Root class="mb-8 font-frank border border-none">
          <Card.Header class="bg-white">
            <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Image Recognition</Card.Title>
              <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                Vectorized data helps us spot visual trademark infringements across diverse media. It's excellent at detecting altered or partially obscured logos and brand assets. And can identify counterfeit products through minute visual details.
              </Card.Description>
          </Card.Header>                                                                          
        </Card.Root>
        <Card.Root class="mb-8 font-frank border border-none">
          <Card.Header class="bg-white">
            <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Anomaly Detection</Card.Title>
              <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                Flags unusual patterns in marketplace listings that may indicate fraud. It identifies suspicious pricing or product descriptions that don't align with the brand. And it can detect abnormal spikes in similar listings that may signal coordinated counterfeiting
              </Card.Description>
            </Card.Header>                                                               
        </Card.Root>
      </div>
      <div class="mb-12 items-center flex">
        <img src={ Vectors } alt="Vectors" width="550px"/>
      </div>
    </div>
  </div>

<!------------------------------------------------=----------------------------------------------->

  <div class="flex justify-center max-w-screen-4xl font-frank mb-20 pt-12">
    <div class="flex col-span-2 gap-20" >
      <div class="mb-12 items-center flex justify-center">
        <img src={ Clustering } alt="Clusters" width="550px"/>
      </div>
      <div class="w-[650px]">
        <div class="mb-4 text-3xl font-black text-zinc-700" id="cluster">Data Clustering:</div>
        <Card.Root class="mb-8 font-frank border border-none">
          <Card.Header class="bg-white">
            <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Counterfeit Detection</Card.Title>                                
              <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                Our clustering algorithms analyze product listings, images, and seller data to identify patterns indicative of counterfeit goods. By grouping similar items, we can quickly spot anomalies and flag potential fakes, protecting your brand's integrity and customer trust.
              </Card.Description>
          </Card.Header>                                                                          
        </Card.Root>
        <Card.Root class="mb-8 font-frank border border-none">
          <Card.Header class="bg-white text-zinc-700">
            <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Market Analysis</Card.Title>
              <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                Leveraging clustering techniques, we aggregate and categorize vast amounts of market data, revealing hidden trends, consumer preferences, and emerging opportunities. This empowers you to make data-driven decisions, optimize product positioning, and stay ahead of competitors in rapidly evolving markets.
              </Card.Description>
          </Card.Header>                                                                          
        </Card.Root>
        <Card.Root class="mb-8 font-frank border border-none">
          <Card.Header class="bg-white text-zinc-700">
            <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Threat Prioritization</Card.Title>
              <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                Our sophisticated clustering approach groups and ranks potential threats based on multiple factors like severity, frequency, and impact. This allows your team to focus resources on the most critical issues first, maximizing protection efficiency and minimizing risks to your brand's reputation.
              </Card.Description>
          </Card.Header>                                                                          
        </Card.Root>
      </div>
    </div>
  </div>

<!------------------------------------------------=----------------------------------------------->    
  <div class="flex justify-center max-w-screen-4xl font-frank pt-20 mb-20">
    <div class="flex col-span-2 gap-20" >
      <div class="w-[650px]">
        <div class="mb-4 text-3xl font-black text-zinc-700" id="llm">Large Language Models (LLMs):</div>
          <Card.Root class="mb-8 font-frank border border-none">
            <Card.Header class="bg-white">
              <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Content Analysis</Card.Title>
                <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                  Our LLMs dissect product descriptions, reviews, and seller communications to detect subtle linguistic patterns indicative of fraudulent activity. This deep textual understanding allows us to identify counterfeit listings and inauthentic sellers with unprecedented accuracy and speed.
                </Card.Description>
            </Card.Header>                                                                          
          </Card.Root>
          <Card.Root class="mb-8 font-frank border border-none">
            <Card.Header class="bg-white">
              <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Sentiment Monitoring</Card.Title>
                <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                  Leveraging advanced LLMs, we analyze social media, forums, and customer feedback to gauge brand perception and detect emerging reputation threats. This real-time sentiment analysis enables proactive response to potential crises and informs strategic brand protection efforts.
                </Card.Description>     
            </Card.Header>                                                                          
          </Card.Root>
          <Card.Root class="mb-8 font-frank border border-none">
            <Card.Header class="bg-white">
              <Card.Title class="font-bold text-zinc-700 tracking-normal text-lg">Automated Reporting</Card.Title>
                <Card.Description class="text-lg subpixel-antialiased leading-7 tracking-wide">
                  Our LLMs generate comprehensive, human-readable reports from complex data sets, translating technical findings into actionable insights. This streamlines the brand protection workflow, allowing your team to quickly understand threats and implement targeted countermeasures without extensive manual analysis.
                </Card.Description>
            </Card.Header>                                                                          
          </Card.Root>
        </div>
      <div class="mb-12 items-center flex">
        <img src={ Kmeans } alt="Kmeans" width="550px"/>
      </div>
    </div>
  </div>
</div>
<div class="h-32"></div>
<Footer />
