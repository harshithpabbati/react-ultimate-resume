import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';

import { styles } from './experiences_front_styles';

const useStyles = createUseStyles(styles);

const ExperiencesFrontComponent = ({ data }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <div className={classes.textsContainer}>
                        <ProfileCardFrontTypography customClasses={{ container: classes.mainTypography }}>
                            {data.currentJobTitle}
                        </ProfileCardFrontTypography>
                        <Typography
                            customClasses={{ container: classes.locationTypography }}
                            component="h3"
                            variant="h2"
                        >
                            <span role="img" aria-label="Location">📍</span>
                            {` ${data.currentJobLocation.name}`}
                        </Typography>
                    </div>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton>
                    See all experiences
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const ExperiencesFront = ExperiencesFrontComponent;