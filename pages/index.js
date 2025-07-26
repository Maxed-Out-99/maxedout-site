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

      <main
        style={{
          padding: '2rem',
          fontFamily: 'sans-serif',
          maxWidth: '700px',
          margin: 'auto',
          lineHeight: '1.7',
        }}
      >
        <h1>MaxedOut Flux Installer Guide 🚀</h1>

        <p>
          This guide walks you through the manual setup for the Flux Kontext workflow.
          For the best experience, right-click any file link and choose <strong>"Save Link As..."</strong> into the specified folder.
        </p>

        <h2>⚡ Prefer to skip all this?</h2>
        <p>
          Just use the one-click installer. It sets everything up automatically (models, nodes, dependencies).
          This manual guide is only here in case you're on unsupported hardware or want full control.
        </p>

        <p>✅ If you're using ComfyUI Desktop, you're fully supported.</p>

        <h2>📦 Custom Nodes</h2>
        <p>Open a terminal inside the <code>custom_nodes/</code> folder and run:</p>
        <pre>
          <code>{`git clone https://github.com/Maxed-Out-99/ComfyUI-MaxedOut.git
git clone https://github.com/Maxed-Out-99/ComfyUI-SmartModelLoaders-MXD.git`}</code>
        </pre>

        <h2>🔧 Install Node Requirements</h2>
        <p>Now activate your virtual environment:</p>
        <pre>
          <code>{`Windows:
.venv\\Scripts\\activate

Mac:
/.venv/bin/activate`}</code>
        </pre>
        <p>Then install the node requirements:</p>
        <pre>
          <code>python -m pip install -r custom_nodes/ComfyUI-SmartModelLoaders-MXD/requirements.txt</code>
        </pre>

        <h2>💾 Core Files</h2>
        <p><strong>Right-click any file link → choose "Save Link As..." → Save into the specified folder inside <code>ComfyUI/models/</code></strong></p>

        <ul>
          <li>ae.safetensors ➡️ <code>vae/</code></li>
          <li>clip_l.safetensors ➡️ <code>clip/</code></li>
        </ul>

        <p>
          ⚠️ <strong>Optional:</strong> download a quantized Nunchaku model for faster performance on NVIDIA GPUs only:
        </p>

        <ul>
          <li><strong>RTX 50 series only:</strong> svdq-fp4_r32-flux.1-kontext-dev.safetensors ➡️ <code>diffusion_models/</code></li>
          <li><strong>All other NVIDIA GPUs:</strong> svdq-int4_r32-flux.1-kontext-dev.safetensors ➡️ <code>diffusion_models/</code></li>
        </ul>

        <h2>📎 CLIP & T5 Models</h2>
        <p>
          Select <strong>ONE</strong> T5 model based on your system's RAM (not VRAM) and place into <code>models/clip/</code>.
        </p>

        <ul>
          <li><strong>Tier A (32GB):</strong> t5xxl_fp16.safetensors</li>
          <li><strong>Tier B (16GB):</strong> t5xxl_fp8_scaled.safetensors</li>
          <li><strong>Tier C (Less than 16GB):</strong> t5xxl_Q5_K_M.gguf</li>
        </ul>

        <h2>🧠 UNet Models</h2>
        <p>
          Choose one UNet model based on your GPU VRAM.
          Save into <code>models/diffusion_models/</code>.
        </p>

        <ul>
          <li><strong>🔶 Tier S (32GB VRAM):</strong> flux1-kontext-dev.safetensors</li>
          <li><strong>🔶 Tier A (16–31GB VRAM):</strong> flux1-dev-kontext_fp8_scaled.safetensors</li>
          <li><strong>🔶 Tier B (12–15GB VRAM):</strong> flux1-kontext-dev-Q5_K_M.gguf</li>
          <li><strong>🔶 Tier C (Under 12GB / Apple Silicon / CPU):</strong> flux1-kontext-dev-Q3_K_S.gguf</li>
        </ul>

        <h2>✅ Done!</h2>
        <p>Once you've:</p>
        <ul>
          <li>Downloaded your models</li>
          <li>Selected one UNet + one T5 tier</li>
          <li>Placed everything into the correct folders</li>
          <li>Installed my nodes and their requirements</li>
        </ul>

        <p>You're ready to run the Flux Kontext workflow manually 🎉</p>
        <p>Enjoy! And if you're stuck, you can always fall back to the one-click installer.</p>

        <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888' }}>
          This site is maintained by MaxedOut.
        </p>
      </main>
    </>
  );
}
