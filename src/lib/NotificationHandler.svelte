<script lang="ts">
  // recieve notification
  import Notification from "./Notification.svelte";

  import { notifications } from "./firebase";

  const close = (eid: string) => {
    console.log(eid);
    $notifications = $notifications.filter(({ id }) => eid != id);
  };
</script>

<section class="notification-container">
  {#each $notifications as n}
    <Notification id={n.id} {close}>
      {n.text}
    </Notification>
  {/each}
</section>

<style>
  .notification-container {
    display: flex;
    flex-direction: column;
    gap: 1px; /* Adjust the gap between notifications */

    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 400px;
    border-radius: 5px;
    z-index: 1000;
  }

  @media (prefers-color-scheme: light) {
    .notification-container {
      background-color: white;
    }
  }
  @media (prefers-color-scheme: dark) {
    .notification-container {
      background-color: black;
    }
  }
</style>
