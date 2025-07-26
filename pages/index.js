import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MaxedOut Flux Installer Guide</title>
        <meta
          name="description"
          content="Download and install the MaxedOut Flux Workflow for ComfyUI. Easy setup, no fluff."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-10 sm:px-8 md:px-10">
        <div className="max-w-3xl mx-auto space-y-8 leading-relaxed text-base">
          <h1 className="text-3xl font-bold text-white">
            MaxedOut Flux Installer Guide <span className="ml-1">🚀</span>
          </h1>

          <p>
            This guide walks you through the manual setup for the Flux Kontext workflow. For the best
            experience, right-click any file link and choose <strong>&quot;Save Link As...&quot;</strong> into the
            specified folder.
          </p>

          <section>
            <h2 className="text-xl font-semibold mt-6">⚡ Prefer to skip all this?</h2>
            <p>
              Just use the one-click installer. It sets everything up automatically (models, nodes,
              dependencies). This manual guide is only here in case you&apos;re on unsupported hardware or want
              full control.
            </p>
            <p className="mt-2">✅ If you&apos;re using ComfyUI Desktop, you&apos;re fully supported.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6">📦 Custom Nodes</h2>
            <p>Open a terminal inside the <code>custom_nodes/</code> folder and run:</p>
            <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto">
              <code>{`git clone https://github.com/Maxed-Out-99/ComfyUI-MaxedOut.git
git clone https://github.com/Maxed-Out-99/ComfyUI-SmartModelLoaders-MXD.git`}</code>
            </pre>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6">🔧 Install Node Requirements</h2>
            <p>Now activate your virtual environment:</p>
            <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto">
              <code>{`Windows:
.venv\\Scripts\\activate

Mac:
/.venv/bin/activate`}</code>
            </pre>
            <p>Then install the node requirements:</p>
            <pre className="bg-neutral-900 p-4 rounded text-sm overflow-x-auto">
              <code>python -m pip install -r custom_nodes/ComfyUI-SmartModelLoaders-MXD/requirements.txt</code>
            </pre>
            <p>That&apos;s it. ✅</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6">💾 Core Files</h2>
            <p>
              <strong>Right-click any file link → choose &quot;Save Link As...&quot; → Save into the specified folder inside</strong> <code>ComfyUI/models/</code>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ae.safetensors ➡️ <code>vae/</code></li>
              <li>clip_l.safetensors ➡️ <code>clip/</code></li>
            </ul>
            <p className="mt-4">
              ⚠️ <strong>Optional:</strong> download a quantized Nunchaku model for faster performance on NVIDIA GPUs only:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>RTX 50 series only:</strong> svdq-fp4_r32-flux.1-kontext-dev.safetensors ➡️ <code>diffusion_models/</code></li>
              <li><strong>All other NVIDIA GPUs:</strong> svdq-int4_r32-flux.1-kontext-dev.safetensors ➡️ <code>diffusion_models/</code></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6">📎 CLIP & T5 Models</h2>
            <p>
              Select <strong>ONE</strong> T5 model based on your system&apos;s RAM (not VRAM) and place into <code>models/clip/</code>.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Tier A (32GB):</strong> t5xxl_fp16.safetensors</li>
              <li><strong>Tier B (16GB):</strong> t5xxl_fp8_scaled.safetensors</li>
              <li><strong>Tier C (Less than 16GB):</strong> t5xxl_Q5_K_M.gguf</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6">🧠 UNet Models</h2>
            <p>Choose one UNet model based on your GPU VRAM. Save into <code>models/diffusion_models/</code>.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>🔶 Tier S (32GB VRAM):</strong> flux1-kontext-dev.safetensors</li>
              <li><strong>🔶 Tier A (16–31GB VRAM):</strong> flux1-dev-kontext_fp8_scaled.safetensors</li>
              <li><strong>🔶 Tier B (12–15GB VRAM):</strong> flux1-kontext-dev-Q5_K_M.gguf</li>
              <li><strong>🔶 Tier C (Under 12GB / Apple Silicon / CPU):</strong> flux1-kontext-dev-Q3_K_S.gguf</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mt-6">✅ Done!</h2>
            <p>Once you&apos;ve:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Downloaded your models</li>
              <li>Selected one UNet + one T5 tier</li>
              <li>Placed everything into the correct folders</li>
              <li>Installed my nodes and their requirements</li>
            </ul>
            <p className="mt-2">You&apos;re ready to run the Flux Kontext workflow manually 🎉</p>
            <p>Enjoy! And if you&apos;re stuck, you can always fall back to the one-click installer.</p>
          </section>

          <p className="text-sm text-neutral-500 pt-8 border-t border-neutral-800">
            This site is maintained by MaxedOut.
          </p>
        </div>
      </main>
    </>
  );
}
