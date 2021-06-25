interface ContinentsProps {
  continents: Array<ContinentType>;
}

const Continents = ({ continents }: ContinentsProps) => {
      {continents.map((continent: ContinentType) => (
