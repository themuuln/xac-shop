import { Container } from '@/components';
import Cards from '@/components/explore/Cards';
import watches from '@/data/watches';

const Explore = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 py-20 md:grid-cols-2 lg:grid-cols-3">
        {watches.map((x, index) => (
          <Cards item={x} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Explore;
