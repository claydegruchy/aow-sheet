<script lang="ts">
  import { onDestroy } from "svelte";
  export let id;
  export let close;

  let elapsed = 0;
  let duration = 5000;

  let last_time = window.performance.now();
  let frame: number;

  (function update() {
    frame = requestAnimationFrame(update);

    const time = window.performance.now();
    elapsed += Math.min(time - last_time, duration - elapsed);

    last_time = time;

    // if (elapsed >= duration) close(id);
    if (elapsed >= duration) elapsed = 0;
  })();

  onDestroy(() => {
    cancelAnimationFrame(frame);
  });
</script>

<div class="notification-box">
  <slot />
  <progress value={elapsed / duration} />
  <button class="notification-close" on:click={() => close(id)}>Close</button>
</div>

<style>
  .notification-box {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #000000;
    border-radius: 5px;

    position: relative;
    background-color: white;
    touch-action: manipulation;

    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Align items from top to bottom */
  }

  progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 2px; /* Adjust height as needed */
    transition: width 0.3s ease;
    width: 100%;
  }

  button {
    align-self: flex-end; /* Align button to the right */
  }

  progress[value] {
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  progress[value]::-webkit-progress-value {
    background-color: #ff0000;
    border-radius: 2px;
  }
</style>
