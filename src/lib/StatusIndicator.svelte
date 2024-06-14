<script>
  import { firebaseUserState } from "./firebase";
  import { SignedIn } from "sveltefire";
</script>

<SignedIn>
  <small>
    <div class={$firebaseUserState ? "spinner" : ""}></div>
    <div>
      {$firebaseUserState || "Saved"}
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
</style>
