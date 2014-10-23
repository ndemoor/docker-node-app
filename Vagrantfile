Vagrant.configure(2) do |config|
  config.vm.provider "virtualbox" do |vb, vbcfg|
    vb.memory = 512

    vbcfg.vm.box = "trusty64"
    config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

    if Vagrant.has_plugin?("vagrant-cachier")
      config.cache.scope = :box
    end

    vbcfg.vm.provision "docker"
  end
end
