import Container from "./styles.ts"

export default ({ item: { name, bodyPart, target, id } }) => (
  <Container>
    <h1>{`- ${name} -`}</h1>
    <span>#{id}</span>
    <p>
      Exercises keep you strong. <span>{name}</span> is one of the best exercises to target your{" "}
      <span>{target}</span>. It will help you improve your mood and gain energy.
    </p>
  </Container>
)
