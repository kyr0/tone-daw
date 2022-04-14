import React, { useCallback } from 'react';

// @ts-ignore
import styles from '@styles/Home.module.css';

import {
  arrangement,
  send,
  transport,
  TransportResult,
  Tone,
} from '@tone-daw-core/dist/index';
import { simpleSong } from 'preset/arrangement/simpleSong';
import { Badge, BadgeSplitted } from '@components/Badge';
import { Container } from '@components/Container';
import { PixelIcon } from '@components/PixelIcon';
import { Text } from "@components/Text"
import { Heading } from '@components/Heading';
import { Button } from '@components/Button';
import { Row } from '@components/Row';
import { Col } from '@components/Col';
import { Radio } from '@components/Radio';
import { Checkbox } from '@components/Checkbox';
import { Input } from '@components/Input';
import { TextArea } from '@components/TextArea';
import { Select } from '@components/Select';
import { Toast } from '@components/Toast';
import { List } from '@components/List';
import { Table } from '@components/Table';
import { Progress } from '@components/Progress';
import { Hero } from '@components/Hero';
import { Hr } from '@components/Hr';
import { Br } from '@components/Br';

// TODO:
console.log('styles',styles,  send);

let transportResult: TransportResult;

const createTransport = async (): Promise<TransportResult> => {
  if (transportResult) {
    return transportResult;
  }
  transportResult = transport(arrangement(simpleSong));
  await Tone.start();
  return transportResult;
};

// https://medium.com/geekculture/creating-a-step-sequencer-with-tone-js-32ea3002aaf5
// https://www.andronio.me/2019/04/24/easily-play-a-song-track-in-javascript-using-tone-js-transport/
const Home = (): JSX.Element => {
  const onPlayClick = useCallback(() => {
    console.log('click');

    (async () => {
      createTransport();

      console.log('start');

      Tone.Transport.stop();
      Tone.Transport.position = 0;
      Tone.Transport.cancel();

      transportResult.transport.start();

      transportResult.arrangement.tracks.forEach((track) => {
        track.part.stop();
        track.part.start(0);
      });
    })();
  }, []);

  return (
    <>
      <Row style={{ marginTop: '2em' }}>
        
        <Br />

        <Heading size='xlarge' centered>kyr0/nes-ui-react</Heading>

        <Br size='medium'/>

        <Text>Welcome back to 1986! This is nes-ui-react, the most comprehensive retro UI component library for React.</Text>

        <Text>We paint the world in 8 bits. The UI looks best in dark mode.</Text>

        <Text>Works great for games, websites and retro-apps.</Text>

        <Br />
        
        <Text>Features:</Text>
        <List listStyle='circle'>
          <li>Automatic dark and light mode</li>
          <li>Only scalable techniques used (CSS border-shadow, SVG, SCSS bitsets)</li>
          <li>Simple grid layout (2, 3 and 4 columns supported)</li>
          <li>Pixel borders, component-independent as helper CSS class</li>
          <li>Permissively licensed</li>
          <li>Based on original NES.css. Now in B3RS3RK3R mode!</li>
        </List>

        <Text>TODO:</Text>
        <List listStyle='disc'>
          <li>enhance &lt;Hr&gt; by a height measure</li>
          <li>all components need the id attribute to apply on the root element</li>
          <li>input fields need to implement callbacks for data binding</li>
          <li>&lt;Scroll&gt; component, that renders with a pixelated scrollbar</li>
          <li>&lt;Link&gt; hyperlink component, that renders with block background color inverted</li>
          <li>&lt;NumberField&gt; component, that comes with pixelated spinners</li>
          <li>&lt;TypeWriter&gt; component, renders just like &lt;Text&gt; but like a human</li>
          <li>&lt;IconButton&gt; component, that is a Button with a PixelIcon</li>
          <li>&lt;Menu&gt; component, that renders many IconButtons in a row</li>
          <li>&lt;Separator&gt; component, that renders a vertical border in a Menu</li>
          <li>a comprehensive PixelIcon icon library (custom made)</li>
          <li>&lt;Toast&gt; should be able to take PixelIcons</li>
          <li>color system needs to be documented (SASS colors)</li>
        </List>

        <Br size='large' />

        <Hr />

        <Br size='large' />

        <Heading size='large' centered>Components</Heading>

        <Heading size='medium' centered>&lt;Hero variant=&quot;dash&quot;&gt; | &lt;Hero variant=&quot;flower&quot;&gt;</Heading>

        <Hero>
          <iframe width="100%" height="250" src="https://www.youtube.com/embed/2F9lMys6fvI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Hero>

        <Br size='large' />

        <Heading size='large' centered>&lt;Container&gt; &amp; Content Alignment</Heading>

        <Container align='center' title='&lt;Container align=&quot;center&quot;&gt;'>title + content center algined because of align=&quot;center&quot;</Container>

        <Br />

        <Container align='right' title='&lt;Container align="right"&gt;'>title + content aligned right</Container>

        <Br />

        <Container align='left' title='&lt;Container roundedCorners alignTitle="center"&gt;' roundedCornders alignTitle="center">
          rounded corners, title aligned center, but content aligned left (default)
        </Container>

        <Br size="large" />

        <Heading size='large' centered>Grid layouts with &lt;Row&gt; and &lt;Col&gt;</Heading>

        <Row>
          <Col type='1-of-2'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-2'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;1-of-2&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Row>
          <Col type='1-of-3'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;1-of-3&quot;&gt;
            </Container>
          </Col>
          <Col type='2-of-3'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;2-of-3&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Row>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
          <Col type='1-of-4'>
            <Container style={{ backgroundColor: 'gray' }} roundedCornders>
              &lt;Col type=&quot;1-of-4&quot;&gt;...&lt;/Col&gt;
            </Container>
          </Col>
        </Row>

        <Br size="large" />

        <Heading size='large' centered>&lt;Text&gt; and &lt;Heading&gt;</Heading>

        <Container title='&lt;Text&gt;' alignTitle="center">
          <Text>Typography is simple: There is text or headings. Every paragraph becomes a &lt;Text&gt;. A text can be centered, have a color and a size.</Text>
       
          <Row>
            <Col type='1-of-2'>
              <Text size='small'>size=&quot;small&quot;</Text>
              <Text size="medium">size=&quot;medium&quot;</Text>
              <Text size='large'>size=&quot;large&quot;</Text>
              <Text size='xlarge'>size=&quot;xlarge&quot;</Text>
            </Col>

            <Col type='1-of-2'>
              <Text color="primary">color=&quot;primary&quot;</Text>
              <Text color="success">color=&quot;success&quot;</Text>
              <Text color="warning">color=&quot;warning&quot;</Text>
              <Text color="error">color=&quot;error&quot;</Text>
              <Text color="disabled">color=&quot;disabled&quot;</Text>
            </Col>
          </Row>
        </Container>

        <Br size="medium" />

        <Container title='&lt;Heading&gt;' alignTitle="center">
          <Text>&lt;Heading&gt; however behaves exactly like a text, but is 25% bigger and size=&quot;xlarge&quot; is underlined. 
            Headings also have spacing that can be controlled with the attributes: dense, topBr, bottomBr.</Text>

          <Row>
            <Col type='1-of-2'>
              <Heading dense size='small'>size=&quot;small&quot;</Heading>
              <Heading dense size="medium">size=&quot;medium&quot;</Heading>
              <Heading dense size='large'>size=&quot;large&quot;</Heading>
              <Heading dense size='xlarge'>size=&quot;xlarge&quot;</Heading>
            </Col>

            <Col type='1-of-2'>
              <Heading dense color="primary">color=&quot;primary&quot;</Heading>
              <Heading dense color="success">color=&quot;success&quot;</Heading>
              <Heading dense color="warning">color=&quot;warning&quot;</Heading>
              <Heading dense color="error">color=&quot;error&quot;</Heading>
              <Heading dense color="disabled">color=&quot;disabled&quot;</Heading>
            </Col>
          </Row>
        </Container>


        <Br size="large" />

        <Container title='&lt;Badge&gt;'>
          <Text>Badges indicate a status, or can represent hash tags, categories etc. The fontColor and bgColor attributes control the colors:</Text>
          <Badge bgColor="primary" text="Primary" fontColor='#fff' />
          <Badge bgColor="error" text="Error" fontColor='#fff' />
          <Badge bgColor="warning" text="Warning" />
          <Badge bgColor="success" text="Success"  />
        </Container>

        <Container title='&lt;BadgeSplitted&gt;'>
          <Text>Sometimes, a tuple of status information shall be displayed. Here, a splitted badge comes in handy. bgColorLeft and textLeft control the left-hand design:</Text>
          <BadgeSplitted textLeft='100%' bgColor="primary" text="OK" />
          <BadgeSplitted textLeft='!!' bgColor="error" text="Oh!"  />
          <BadgeSplitted textLeft='??' bgColor="warning" text="Ha?" />
          <BadgeSplitted textLeft=':)' bgColor="success" text="Yay!" />
        </Container>

      </Row>

      <Br size="large" />
        
      <Row>
        <Col type='1-of-2'>
          <Container title='Pixel Icons'>
            <PixelIcon name={styles.pixeliconAron}  size='large' style={{ margin: 5, borderColor: '#cc0000' }} />
            <PixelIcon name='pixelicon-checkmark' style={{ margin: 5, borderColor: '#cc0000' }} />
            <PixelIcon name={styles.pixeliconMeowAnimated} size='small' style={{ margin: 5, borderColor: '#00cc00' }} />

            <Text>Sizes: <br />
              &nbsp;&nbsp;small: 16px<br />
              &nbsp;&nbsp;medium: 24px<br />
              &nbsp;&nbsp;large: 32px
            </Text>
            <Text>Pixel width + height: 1px</Text>
            <Text color="disabled">
              &gt; Create your own PixelIcons with&nbsp;
              <a href="https://www.pixelartcss.com/" target={"_blank"} rel="noreferrer">PixelArtCSS</a>
            </Text>
          </Container>
        </Col>

        <Col type='1-of-2'>
          <Container title='Pixelated Images'>
            <img alt="pixelated cursor icon" src="/assets/cursor.png" width={100} height={100} />
          </Container>
        </Col>
      </Row>

      <Br size="large" />

      <Row>

        <Container title='Buttons'>
          <Button onClick={onPlayClick}>Primary</Button>
          <Button color="success" onClick={onPlayClick} style={{ color: '#000' }}>Success</Button>
          <Button color="primary" onClick={onPlayClick}>Primary</Button>
          <Button color="warning" onClick={onPlayClick}>Warning</Button>
          <Button color="error" onClick={onPlayClick}>Error</Button>
          <Button disabled onClick={onPlayClick}>Disabled</Button>
        </Container>

      </Row>

      <Br size="large" />

      <Row>

        <Col type='1-of-2'>

          <Container title='Radios'>
            <Radio name="foo" value="yes" label="Yes" checked />
            <Radio name="foo" value="no" label="No" />

            <Br />
            <Text size="small" color="disabled">Can be disabled too:</Text>
            <Radio name="foo1" value="yes" label="Disabled" checked disabled />
          </Container>
        </Col>

        <Col type='1-of-2'>

          <Container title='Checkboxes'>
            <Checkbox name="bar" value="yes" label="Yes" checked />
            <Checkbox name="bar" value="no" label="No" />
            <Br />
            <Text size="small" color="disabled">Can be disabled too:</Text>
            <Checkbox name="bar1" value="yes" label="Disabled" checked disabled /> 
          </Container>
        </Col>

      </Row>

      <Br size="medium" />

      <Row>
        <Container title='Inputs' alignTitle='center'>
          <form>
            <Row>

              <Col type='1-of-2'>
                <Input type="text" autoComplete="first-name" name="firstName" value="Aron" label="First name:" />
                <Text>&nbsp;</Text>
                <Input type="password" autoComplete="current-password" validationMode='warning' name="password" value="123" label="Password:" />
                <Text size="small" color="warning">Weak password!</Text>
              </Col>

              <Col type='1-of-2'>
                <Input type="text" autoComplete="current-email" validationMode='error' name="email" value="info@aron-homberg.de" label="E-Mail:" />
                <Text size="small" color="error">This email already exists!</Text>

                <Input type="text" validationMode='success' name="status" value="SUCCESS" label="Status:" disabled />
                <Text size="small" color="success">User created successfully.</Text>
              </Col>
            </Row>

          </form>
        </Container>

        <Br size="medium" />

        <Container title='Textarea' alignTitle="center">
          <TextArea rows={5} name="textarea" value={`L0r3m 1p5um d0l0r s1t 4m37,\r\n
c0ns3c737ur 4d1p15c1ng 3l1t3 31337!`} />

          <Row>
            <Col type='1-of-3'>
              <TextArea rows={3} name="textarea" validationMode='success' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
            </Col>

            <Col type='1-of-3'>
              <TextArea rows={3} name="textarea" validationMode='warning' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
            </Col>

            <Col type='1-of-3'>
              <TextArea rows={3} name="textarea" validationMode='error' value={`MISSION ACCOMPLISHED!\nALL YOUR BASE BELONG TO US!`} disabled />
            </Col>
          </Row>
        </Container>

        <Br size="large" />

        <Container title='Toasts' alignTitle="center">
          <Toast>
            Click on the buttons below to open the possible variants of dialogs. 
          </Toast>

          <Toast style={{ float: 'right' }} bubblePostion='right' cursor='pointer'>
            Right bubble and cursor: pointer
          </Toast>
        </Container>

        <Br size="large" />

        <Container title='Selects' alignTitle="center">
          <Row>
            <Col type='1-of-3'>
              <Select id="difficulty" value="VETERAN" label="Difficulty:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY</option>
                <option value="VETERAN">VETERAN</option>
                <option value="HARDCORE">HARDCORE</option>
              </Select>
            </Col>

            <Col type='1-of-3'>
              <Select id="difficulty_warning" value="VETERAN" validationMode='warning' label="Difficulty+:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY+</option>
                <option value="VETERAN">VETERAN+</option>
                <option value="HARDCORE">HARDCORE+</option>
              </Select>
            </Col>

            <Col type='1-of-3'>
              <Select id="difficulty_warning" value="VETERAN" validationMode='error' label="Difficulty++:">
                <option value="" disabled hidden>Select...</option>
                <option value="EASY">EASY++</option>
                <option value="VETERAN">VETERAN++</option>
                <option value="HARDCORE">HARDCORE++</option>
              </Select>
            </Col>
          </Row>

          {/* TODO: 2nd column non-disabled; margin right too much for multiselect */}
          <Select id="success" value={["EASY", "VETERAN"]} disabled validationMode='success' multiple label="Mastered:">
            <option value="" disabled hidden>Select...</option>
            <option value="EASY">EASY</option>
            <option value="VETERAN">VETERAN</option>
            <option value="HARDCORE">HARDCORE</option>
            <option value="ELDEN_RING">ELDEN RING</option>
          </Select>
        </Container>

        <Br size="large" />

        <Container title="Lists" alignTitle="center">
          <Row>
            <Col type='1-of-2'>
              <Heading dense>Circle list:</Heading>
              <List listStyle='circle'>
                <li>Wake up</li>
                <li>Skip school</li>
                <li>Turn on the C64</li>
                <li>Sleep</li>
              </List>
            </Col>
            <Col type='1-of-2'>
              <Heading dense>Disc list:</Heading>
              <List listStyle='disc'>
                <li>Wake up</li>
                <li>Skip school</li>
                <li>Turn on the C64</li>
                <li>Sleep</li>
              </List>
            </Col>
          </Row>
        </Container>

        <Br size="large" />

        <Container title="Tables" alignTitle="center">
          <Row>
            <Col type='1-of-2'>
              <Heading topBr={false} bottomBr={false}>Left-aligned, borderless:</Heading>
              <Table>
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Funny</td>
                    <td>Games</td>
                    <td>Are made</td>
                    <td>of 8 bits</td>
                  </tr>
                  <tr>
                    <td>Good</td>
                    <td>Players</td>
                    <td>dream in</td>
                    <td>8 bit</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col type='1-of-2'>
              <Heading topBr={false} bottomBr={false}>Centered, with borders:</Heading>
              <Table bordered centered>
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Funny</td>
                    <td>Games</td>
                    <td>Are made</td>
                    <td>of 8 bits</td>
                  </tr>
                  <tr>
                    <td>Good</td>
                    <td>Players</td>
                    <td>dream in</td>
                    <td>8 bit</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        <Br size="large" />

        <Container title='Progress' alignTitle="center">
          <Progress value="90" max="100" />
          <Progress value="80" max="100" barStyle='primary' />
          <Progress value="30" max="100" barStyle='success' />
          <Progress value="10" max="100" barStyle='warning' />
          <Progress value="50" max="100" barStyle='error' />
          <Progress value="50" max="100" barStyle='pattern' />
        </Container>

        <Br size='large' />

        <Heading centered>CSS helper class: .pixel-border</Heading>

        <Row>
          <Col className="pixel-border" type="1-of-4">
            <Text size='small' centered>
              <br />
              <pre>.pixel-border</pre>
            </Text>
          </Col>
          <Col className="pixel-border-2" type="1-of-4">
            <Text size='small' centered>
              <br />
              <pre>.pixel-border-2</pre>
            </Text>
          </Col>
          <Col className="pixel-border-2x" type="1-of-4">
            <Text size='small' centered>
              <br />
              <pre>.pixel-border-2x</pre>
            </Text>
          </Col>
          <Col className="pixel-border-2x-2" type="1-of-4">
            <Text size='small' centered>
              <br />
              <pre>.pixel-border-2x-2</pre>
            </Text>
          </Col>
        </Row>

        <Br size='large' />

      </Row>
    </>
  );
};

export default Home;
