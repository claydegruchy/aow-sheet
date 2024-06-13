<script lang="ts">
  import { FirebaseApp } from "sveltefire";
  import { SignedIn, SignedOut, Doc, Collection } from "sveltefire";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import type { Auth } from "firebase/auth";

  import { firestore, auth } from "./firebase";

  async function signInWithGoogle(auth: Auth) {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    await signInWithPopup(auth, provider);
  }
</script>

<FirebaseApp {auth} {firestore}>
  <SignedIn let:user let:signOut>
    <button on:click={signOut}>👤 {user.displayName}</button>
  </SignedIn>

  <SignedOut let:auth>
    <button on:click={() => signInWithGoogle(auth)}>Sign In</button>
  </SignedOut>

  <slot />
</FirebaseApp>
