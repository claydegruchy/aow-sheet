<script>
  export let name;
  export let desc;
</script>

<div class={"card " + $$restProps.class}>
  <h5>{name}</h5>
  <p>{desc}</p>
</div>

<style>
  .card.learning {
    border-style: dotted;
    animation: jiggle 0.1s ease infinite alternate;
  }

  @keyframes jiggle {
    from {
      transform: rotate(-1deg);
    }
    to {
      transform: rotate(1deg);
    }
  }

  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    max-width: 300px;
    margin: 16px;
    background-color: white;
  }

  .card h4 {
    margin: 0 0 8px 0;
    font-size: 1.25rem;
    color: #333;
  }

  .card p {
    margin: 0;
    font-size: 1rem;
    color: #666;
  }
</style>
