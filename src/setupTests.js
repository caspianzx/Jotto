import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
//Configure Enzyme to know that it is using the adapter

Enzyme.configure({ adapter: new EnzymeAdapter() });
