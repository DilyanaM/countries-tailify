import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';
import { trigger } from '@shopify/enzyme-utilities';
import { mountAndUpdate } from './utils/mountAndUpdate';
import Continent from './views/Continent';
import GET_CONTINENT from './queries/continent';

describe('Continent View', () => {
  let wrapper;

  beforeEach(async () => {
    const MOCKED_CONTINENTS = {
      data: {
        continent: {
          code: 'AF',
          name: 'Africa',
          countries: [
            {
              code: 'AO',
              name: 'Angola',
              emoji: '🇦🇴',
            },
            {
              code: 'BF',
              name: 'Burkina Faso',
              emoji: '🇧🇫',
            },
            {
              code: 'BI',
              name: 'Burundi',
              emoji: '🇧🇮',
            },
            {
              code: 'BJ',
              name: 'Benin',
              emoji: '🇧🇯',
            },
            {
              code: 'BW',
              name: 'Botswana',
              emoji: '🇧🇼',
            },
          ],
        },
      },
    };

    const mocks = [
      {
        request: {
          query: GET_CONTINENT,
          variables: {
            code: MOCKED_CONTINENTS.data.continent.code,
          },
        },
        result: MOCKED_CONTINENTS,
      },
    ];

    wrapper = await mountAndUpdate(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Router>
          <Continent match={{ params: { code: 'AF' } }} />
        </Router>
      </MockedProvider>,
    );
  });

  it('should render full list of countries', () => {
    expect(wrapper.find('li')).toHaveLength(5);
  });

  it('generates valid url for country', () => {
    const INPUT_VALUE = {
      target: {
        value: 'Ang',
      },
    };

    trigger(wrapper.find('input'), 'onChange', INPUT_VALUE);

    expect(wrapper.find('a').prop('href')).toEqual('/countries/AO');
  });

  it('returns proper name for country', () => {
    const INPUT_VALUE = {
      target: {
        value: 'Ang',
      },
    };

    trigger(wrapper.find('input'), 'onChange', INPUT_VALUE);

    expect(wrapper.find('h5').text()).toEqual('Angola');
  });

  it('should not return countries if nothing matches search query', () => {
    const INPUT_VALUE = {
      target: {
        value: 'Bul',
      },
    };

    trigger(wrapper.find('input'), 'onChange', INPUT_VALUE);

    expect(wrapper.find('li')).toHaveLength(0);
  });

  it('should return results that match search query', () => {
    const INPUT_VALUE = {
      target: {
        value: 'Ang',
      },
    };

    trigger(wrapper.find('input'), 'onChange', INPUT_VALUE);

    expect(wrapper.find('li')).toHaveLength(1);
  });
});
