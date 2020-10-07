import React from 'react';
import styled from '@emotion/styled';

import {t} from 'app/locale';
import {Frame} from 'app/types';
import {getMeta} from 'app/components/events/meta/metaProxy';
import AnnotatedText from 'app/components/events/meta/annotatedText';
import space from 'app/styles/space';

type Props = {
  frame: Frame;
  hasHiddenDetails?: boolean;
  showCompleteFunctionName?: boolean;
  className?: string;
};

const FunctionName = ({
  frame,
  showCompleteFunctionName,
  hasHiddenDetails,
  className,
}: Props) => {
  const getValueOutput = ():
    | {value: Frame['function']; meta: ReturnType<typeof getMeta>}
    | undefined => {
    if (hasHiddenDetails && showCompleteFunctionName && frame.rawFunction) {
      return {
        value: frame.rawFunction,
        meta: getMeta(frame, 'rawFunction'),
      };
    }

    if (frame.function) {
      return {
        value: frame.function,
        meta: getMeta(frame, 'function'),
      };
    }

    if (frame.rawFunction) {
      return {
        value: frame.rawFunction,
        meta: getMeta(frame, 'rawFunction'),
      };
    }

    return undefined;
  };

  const valueOutput = getValueOutput();

  return (
    <StyledCode className={className}>
      {!valueOutput ? (
        t('<unknown>')
      ) : (
        <AnnotatedText value={valueOutput.value} meta={valueOutput.meta} />
      )}
    </StyledCode>
  );
};

export default FunctionName;

const StyledCode = styled('code')`
  margin-right: ${space(0.75)};
`;
