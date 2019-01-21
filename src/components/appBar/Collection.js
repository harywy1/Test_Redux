import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 7,
  },
  gridList: {
    width: 1000,
    height: 2000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tileData = [
   {
       img: 'https://awsimages.detik.net.id/community/media/visual/2018/07/16/8752a53c-3206-4400-8a21-d464e1009b13.jpeg?w=700&q=80',
       title: 'Cluster1',
       
   },
   {
    img: `http://www.arsitekyogyakarta.com/wp-content/uploads/2018/10/TIPS-AMPUH-MEMILIH-ARISTEK-JASA-DESAIN-RUMAH-YOGYAKARATA.jpg`,
    title: 'Cluster2',
    
   },
   {
    img: `http://sgold-palembang.com/wp-content/uploads/2018/11/SOLID-GOLD-1.jpg`,
    title: 'Cluster3',
    
   },
   {
    img: `https://www.pixelldesign.com/wp-content/uploads/contoh-brosur-perumahan-griya-mutiara.jpg`,
    title: 'Tipe1',
   
   },
   {
    img: `https://www.pixelldesign.com/wp-content/uploads/contoh-desain-brosur-perumahan-4.jpg`,
    title: 'Tipe2',
   
   },
   {
    img: `https://www.pixelldesign.com/wp-content/uploads/desain-brosur-perumahan-kavling.jpg`,
    title: 'Tipe3',
   
   },
   {
    img: `https://storage.jualo.com/original/10696585/rumah-minimalis-harga-properti-rumah-10696585.jpg`,
    title: 'Standar1',
    
   },
   {
    img: `https://storage.jualo.com/original/11063353/rumah-minimalis-harga-properti-rumah-11063353.jpg`,
    title: 'Standar2',
   
   },
   {
    img: `https://apollo-singapore.akamaized.net/v1/files/qujiu1436t601-ID/image;s=966x691;olx-st/_1_.jpg`,
    title: 'Standar3',
   
   },
  ];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className="populer">
    <div className={classes.root} style={{ backgroundColor: 'grey' }}>
      <GridList cellHeight={400} className={classes.gridList}>
      <div>
        <GridListTile key="Subheader" cols={5} style={{ height: '60' }}>
          <ListSubheader component="div">Collection</ListSubheader>
        </GridListTile>
      </div>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.img} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);