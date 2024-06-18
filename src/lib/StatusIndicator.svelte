<script>
  import { firebaseConnectionState } from "./firebase";
  import { SignedIn } from "sveltefire";
</script>

<SignedIn>
  <small>
    <div class={$firebaseConnectionState ? " shimmer-bar" : ""}></div>
    <div>
      {$firebaseConnectionState || "Saved"}
    </div>
  </small>
</SignedIn>

<style>
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-left-color: #09f;
    animation: spin 1s linear infinite;
    display: inline-block;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .shimmer-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(255, 223, 0, 0) 25%,
      rgba(255, 223, 0, 0.5) 50%,
      rgba(255, 223, 0, 0) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    z-index: 9999;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
</style>
