import {calculateMembershipFee} from './flatbondActions';

const stateFixed = {
    config: {
      isFixedFee: true,
      fixedFeeAmount: 4774,
      loading: false,
      error: false
    },
    flatBond: {
      showRentInPeriod: 'monthly',
      rentAmountInPeriod: 4330,
      postcode: '',
      validPostcode: false,
      flatBondCreated: false,
      flatBondError: false,
      loading: false
    }
  }
 const stateFlexWeek = {
    config: {
      isFixedFee: false,
      fixedFeeAmount: 17211,
      loading: false,
      error: false
    },
    flatBond: {
      showRentInPeriod: 'weekly',
      rentAmountInPeriod: 1000,
      postcode: '',
      validPostcode: false,
      flatBondCreated: false,
      flatBondError: false,
      loading: false
    }
  }

  const stateFlexMonth = {
        config: {
          isFixedFee: false,
          fixedFeeAmount: 17211,
          loading: false,
          error: false
        },
        flatBond: {
          showRentInPeriod: 'monthly',
          rentAmountInPeriod: 4330,
          validPostcode: false,
          flatBondCreated: false,
          flatBondError: false,
          loading: false
        }
      }

it('Calculates Membership Fee Correctly', () => {
    expect(calculateMembershipFee(1000, stateFixed)).toBeCloseTo(4774);
    expect(calculateMembershipFee(1000, stateFlexWeek)).toBeCloseTo(1200.00);
    expect(calculateMembershipFee(4330, stateFlexMonth)).toEqual(1212.40);
    expect(calculateMembershipFee(110, stateFlexMonth)).toEqual(144.00);

  });