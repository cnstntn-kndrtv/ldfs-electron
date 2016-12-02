#!bash
# fixes active-window shell scripts after building app

# cleanup
rm -R dist

# build
build --dir

# copy assets
# md dist/mac/ldfs-electron.app/Contents/Resources/assets
# cp -R node_modules/ldf-server/assets dist/mac/ldfs-electron.app/Contents/Resources/assets/ldf-server
